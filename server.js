const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let services = [
    {
        id: 1,
        name: "SEO Optimization",
        icon: "🔍",
        description: "Boost your search engine rankings and drive organic traffic with our expert SEO strategies and technical optimization."
    },
    {
        id: 2,
        name: "Social Media Marketing",
        icon: "📱",
        description: "Engage your audience and build your brand on platforms like Facebook, Instagram, LinkedIn, and more."
    },
    {
        id: 3,
        name: "Paid Advertising",
        icon: "💰",
        description: "Maximize ROI with data-driven paid advertising campaigns on Google, Facebook, Instagram, and other platforms."
    },
    {
        id: 4,
        name: "Content Strategy",
        icon: "✍️",
        description: "Create valuable, relevant content that attracts and retains your ideal customers through storytelling."
    },
    {
        id: 5,
        name: "Email Marketing",
        icon: "📧",
        description: "Nurture leads and drive sales with personalized email campaigns, automation, and segmentation."
    },
    {
        id: 6,
        name: "Analytics & Reporting",
        icon: "📈",
        description: "Track performance, measure success, and make data-driven decisions with comprehensive analytics."
    }
];

let nextId = 7;

app.get('/api/services', (req, res) => {
    console.log('GET /api/services - Returning all services');
    res.json(services);
});

app.post('/api/services', (req, res) => {
    const { name, icon, description } = req.body;
    
    if (!name || !icon || !description) {
        console.log('POST /api/services - Missing required fields');
        return res.status(400).json({ error: 'Name, icon, and description are required' });
    }
    
    const newService = {
        id: nextId++,
        name,
        icon,
        description
    };
    
    services.push(newService);
    console.log(`POST /api/services - Added new service: ${name}`);
    res.status(201).json(newService);
});

app.delete('/api/services/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = services.findIndex(s => s.id === id);
    
    if (index === -1) {
        console.log(`DELETE /api/services/${id} - Service not found`);
        return res.status(404).json({ error: 'Service not found' });
    }
    
    const deleted = services.splice(index, 1);
    console.log(`DELETE /api/services/${id} - Removed service: ${deleted[0].name}`);
    res.json({ message: 'Service deleted successfully', service: deleted[0] });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 NEXA Digital Marketing Agency - Full Stack App      ║
║                                                           ║
║   Server running on: http://0.0.0.0:${PORT}                  ║
║                                                           ║
║   📡 API Endpoints:                                       ║
║   • GET    /api/services      - List all services        ║
║   • POST   /api/services      - Add new service          ║
║   • DELETE /api/services/:id  - Remove service by ID     ║
║                                                           ║
║   📂 Static files served from root directory             ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
});
