export interface Client {
  name: string;
  path: {
    win32: string;
    linux?: string;
  };
}
export interface Clients {
  stable: Client;
  ptb: Client;
  canary: Client;
  dev: Client;
}

export const clients: Clients = {
  stable: {
    name: 'Stable',
    path: {
      win32: process.env.APPDATA + '\\discord\\settings.json',
      linux: ``,
    },
  },
  ptb: {
    name: 'PTB',
    path: {
      win32: process.env.APPDATA + '\\discordptb\\settings.json',
      linux: ``,
    },
  },
  canary: {
    name: 'Canary',
    path: {
      win32: process.env.APPDATA + '\\discordcanary\\settings.json',
      linux: ``,
    },
  },
  dev: {
    name: 'Dev',
    path: {
      win32: process.env.APPDATA + '\\discorddevelopment\\settings.json',
      linux: ``,
    },
  },
};
export default clients;
