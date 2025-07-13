// toastConfig.ts
import React from 'react';
import {
  BaseToast,
  ErrorToast,
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';

const toastConfig: ToastConfig = {
  success: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#28a745',
        backgroundColor: '#1c2b38',
        borderRadius: 10,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      }}
      text2Style={{
        fontSize: 14,
        color: '#ccc',
      }}
    />
  ),

  error: (props: ToastConfigParams<any>) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#ff4d4f',
        backgroundColor: '#1c2b38',
        borderRadius: 10,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      }}
      text2Style={{
        fontSize: 14,
        color: '#ccc',
      }}
    />
  ),
};

export default toastConfig;
