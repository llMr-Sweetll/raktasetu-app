import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.raktasetu.app',
  appName: 'RaktaSetu',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#7A1626',
      showSpinner: true,
      spinnerColor: '#FFFFFF'
    }
  }
};

export default config;
