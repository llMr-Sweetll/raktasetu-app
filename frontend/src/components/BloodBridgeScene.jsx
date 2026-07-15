import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Living Bridge — particle bloodstream between donor ↔ hospital nodes.
 * Disposes WebGL resources on unmount. Respects prefers-reduced-motion.
 */
export default function BloodBridgeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const w = mount.clientWidth || window.innerWidth;
    const h = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0506, 0.045);

    const camera = new THREE.PerspectiveCamera(48, w / h, 0.1, 100);
    camera.position.set(0, 0.35, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x0a0506, 1);
    mount.appendChild(renderer.domElement);

    // Soft ambient + rim lights
    scene.add(new THREE.AmbientLight(0x3d0a14, 0.55));
    const key = new THREE.PointLight(0xc8102e, 1.4, 18);
    key.position.set(0, 1.2, 2);
    scene.add(key);
    const fill = new THREE.PointLight(0x7a1626, 0.7, 20);
    fill.position.set(-3, -1, 1);
    scene.add(fill);

    // Two bridge anchors (donor left, hospital right)
    const nodeGeo = new THREE.SphereGeometry(0.22, 24, 24);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xc8102e,
      emissive: 0x7a1626,
      emissiveIntensity: 0.85,
      roughness: 0.35,
      metalness: 0.2,
    });
    const left = new THREE.Mesh(nodeGeo, nodeMat);
    const right = new THREE.Mesh(nodeGeo, nodeMat.clone());
    left.position.set(-2.6, 0, 0);
    right.position.set(2.6, 0, 0);
    scene.add(left, right);

    // Soft glow shells
    const shellGeo = new THREE.SphereGeometry(0.42, 20, 20);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0xc8102e,
      transparent: true,
      opacity: 0.12,
    });
    const leftShell = new THREE.Mesh(shellGeo, shellMat);
    const rightShell = new THREE.Mesh(shellGeo, shellMat.clone());
    leftShell.position.copy(left.position);
    rightShell.position.copy(right.position);
    scene.add(leftShell, rightShell);

    // Bridge arc curve
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.6, 0, 0),
      new THREE.Vector3(-1.2, 0.85, 0.15),
      new THREE.Vector3(0, 1.15, 0),
      new THREE.Vector3(1.2, 0.85, -0.15),
      new THREE.Vector3(2.6, 0, 0),
    ]);

    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.018, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x7a1626,
      transparent: true,
      opacity: 0.35,
    });
    scene.add(new THREE.Mesh(tubeGeo, tubeMat));

    // Flowing particles along the bridge
    const COUNT = reduceMotion ? 80 : 420;
    const positions = new Float32Array(COUNT * 3);
    const phases = new Float32Array(COUNT);
    const speeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      phases[i] = Math.random();
      speeds[i] = 0.08 + Math.random() * 0.18;
      const p = curve.getPoint(phases[i]);
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xf2e8e6,
      size: reduceMotion ? 0.035 : 0.045,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Ambient dust
    const DUST = reduceMotion ? 40 : 160;
    const dustPos = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 10;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    const dGeo = new THREE.BufferGeometry();
    dGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dust = new THREE.Points(
      dGeo,
      new THREE.PointsMaterial({
        color: 0x3d0a14,
        size: 0.03,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      })
    );
    scene.add(dust);

    let raf = 0;
    let t0 = performance.now();
    const tmp = new THREE.Vector3();

    const onResize = () => {
      const nw = mount.clientWidth || window.innerWidth;
      const nh = mount.clientHeight || window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    const tick = (now) => {
      const elapsed = (now - t0) / 1000;
      // Heartbeat ~72 bpm
      const beat = 1 + 0.06 * Math.pow(Math.max(0, Math.sin(elapsed * Math.PI * 2.4)), 8);
      left.scale.setScalar(beat);
      right.scale.setScalar(beat);
      leftShell.scale.setScalar(beat * 1.05);
      rightShell.scale.setScalar(beat * 1.05);
      key.intensity = 1.2 + beat * 0.35;

      if (!reduceMotion) {
        const attr = pGeo.attributes.position;
        for (let i = 0; i < COUNT; i++) {
          phases[i] = (phases[i] + speeds[i] * 0.016) % 1;
          curve.getPoint(phases[i], tmp);
          // slight lateral sway
          const sway = Math.sin(elapsed * 2 + i) * 0.04;
          attr.setXYZ(i, tmp.x, tmp.y + sway, tmp.z + sway * 0.5);
        }
        attr.needsUpdate = true;
        camera.position.x = Math.sin(elapsed * 0.15) * 0.25;
        camera.lookAt(0, 0.4, 0);
        dust.rotation.y = elapsed * 0.03;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      pGeo.dispose();
      pMat.dispose();
      dGeo.dispose();
      dust.material.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      right.material.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      rightShell.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 40%, #3d0a14 0%, #0a0506 70%)',
      }}
    />
  );
}
