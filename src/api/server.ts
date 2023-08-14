interface Server {
    id: number;
    name: string;
    url: string;
}

// Server Base URL
const server: Server = {
    id: 1,
    name: 'Local',
    url: 'http://localhost:3000'
    };

export default server;