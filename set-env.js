const fs = require('fs');

const serviceId = process.env.EMAILJS_SERVICE_ID || '';
const templateId = process.env.EMAILJS_TEMPLATE_ID || '';
const publicKey = process.env.EMAILJS_PUBLIC_KEY || '';

const environment = `export const environment = {
  production: true,
  emailjs: {
    serviceId: '${serviceId}',
    templateId: '${templateId}',
    publicKey: '${publicKey}'
  }
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', environment);
console.log('environment.prod.ts generated successfully');