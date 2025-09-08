import { useState, useEffect } from 'react';

const API_KEY_STORAGE_KEY = 'gcai_api_key';

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar API Key do localStorage na inicialização
  useEffect(() => {
    try {
      const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
      if (savedApiKey) {
        setApiKey(savedApiKey);
      }
    } catch (error) {
      console.warn('Erro ao carregar API Key do localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Salvar API Key no localStorage
  const saveApiKey = (key: string) => {
    try {
      if (key.trim()) {
        localStorage.setItem(API_KEY_STORAGE_KEY, key.trim());
        setApiKey(key.trim());
      } else {
        localStorage.removeItem(API_KEY_STORAGE_KEY);
        setApiKey('');
      }
    } catch (error) {
      console.error('Erro ao salvar API Key no localStorage:', error);
    }
  };

  // Limpar API Key
  const clearApiKey = () => {
    try {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
      setApiKey('');
    } catch (error) {
      console.error('Erro ao limpar API Key do localStorage:', error);
    }
  };

  // Verificar se a API Key está válida (formato básico)
  const isValidApiKey = (key: string): boolean => {
    return key.trim().length > 10 && key.startsWith('sk-');
  };

  return {
    apiKey,
    isLoaded,
    saveApiKey,
    clearApiKey,
    isValidApiKey: isValidApiKey(apiKey),
    setApiKey: saveApiKey
  };
}

