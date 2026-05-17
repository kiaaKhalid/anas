# 📧 Template E-mail Professionnel pour EmailJS - SolarPro

Ce document contient le template HTML professionnel spécialement conçu pour votre site **SolarPro** à utiliser dans votre tableau de bord **EmailJS**, ainsi que les instructions simples pour l'installer et le connecter.

---

## 📝 Configuration Générale dans EmailJS

1. Connectez-vous à votre compte [EmailJS](https://dashboard.emailjs.com/).
2. Allez dans l'onglet **Email Templates** et cliquez sur **Create New Template**.
3. En haut à droite, cliquez sur **Settings** pour définir :
   *   **Name :** `SolarPro Consultation Template`
   *   **Template ID :** (Notez cet ID, vous en aurez besoin dans le code)
4. Dans l'onglet **Editor**, définissez les paramètres suivants :
   *   **To Email :** `votre-email@gmail.com` (l'adresse où vous souhaitez recevoir les demandes de devis)
   *   **From Name :** `SolarPro Formulaire`
   *   **Subject :** `☀️ Nouveau Devis SolarPro : {{service}} de {{from_name}}`

---

## 🎨 Code HTML du Template Professionnel

Pour obtenir un e-mail au design premium reprenant la charte graphique de **SolarPro** (Bleu marine et Vert solaire), passez l'éditeur EmailJS en mode **HTML / Code Source** (icône `<>` ou bouton "HTML" dans la barre d'outils de l'éditeur) et collez le code suivant :

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { 
      font-family: 'Segoe UI', Helvetica, Arial, sans-serif; 
      background-color: #f1f5f9; 
      color: #1e293b; 
      margin: 0; 
      padding: 30px 10px; 
    }
    .container { 
      max-width: 600px; 
      background-color: #ffffff; 
      border-radius: 16px; 
      overflow: hidden; 
      box-shadow: 0 10px 30px rgba(13, 27, 46, 0.08); 
      border: 1px solid #e2e8f0; 
      margin: 0 auto; 
    }
    .header { 
      background: linear-gradient(135deg, #0d1b2e 0%, #162540 100%); 
      padding: 35px 30px; 
      text-align: center; 
      border-bottom: 4px solid #22c55e; 
    }
    .logo { 
      color: #ffffff; 
      font-size: 28px; 
      font-weight: 800; 
      text-decoration: none; 
      margin: 0; 
      letter-spacing: -0.5px; 
    }
    .logo span { 
      color: #22c55e; 
    }
    .content { 
      padding: 40px 35px; 
    }
    .title { 
      font-size: 22px; 
      font-weight: 800; 
      color: #0d1b2e; 
      margin-top: 0; 
      margin-bottom: 28px; 
      text-align: center; 
      letter-spacing: -0.5px;
    }
    .grid { 
      width: 100%; 
      border-collapse: collapse;
      margin-bottom: 30px; 
    }
    .grid td {
      padding: 14px 0;
      border-bottom: 1px solid #f1f5f9;
      font-size: 15px;
    }
    .label { 
      font-weight: 600; 
      color: #475569; 
      width: 38%; 
    }
    .value { 
      color: #0d1b2e; 
    }
    .message-title {
      font-weight: 700; 
      color: #0d1b2e; 
      font-size: 15px; 
      margin-top: 28px;
      margin-bottom: 10px;
    }
    .message-box { 
      background-color: #f8fafc; 
      border-left: 4px solid #22c55e; 
      border-radius: 8px; 
      padding: 22px; 
      color: #334155; 
      font-style: italic; 
      line-height: 1.7; 
      font-size: 14.5px; 
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);
    }
    .btn-container {
      text-align: center;
      margin-top: 35px;
    }
    .btn { 
      display: inline-block; 
      background-color: #22c55e; 
      color: #ffffff !important; 
      padding: 14px 30px; 
      border-radius: 8px; 
      text-decoration: none; 
      font-weight: 700; 
      transition: background-color 0.2s; 
      font-size: 15px; 
      box-shadow: 0 4px 14px rgba(34, 197, 94, 0.3);
    }
    .footer { 
      background-color: #f8fafc; 
      padding: 24px; 
      text-align: center; 
      font-size: 12.5px; 
      color: #94a3b8; 
      border-top: 1px solid #e2e8f0; 
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Solar<span>Pro</span></div>
    </div>
    <div class="content">
      <h2 class="title">☀️ Nouvelle Demande de Consultation Solaire</h2>
      <table class="grid">
        <tr>
          <td class="label">Nom Complet</td>
          <td class="value"><strong>{{from_name}}</strong></td>
        </tr>
        <tr>
          <td class="label">Adresse Email</td>
          <td class="value"><a href="mailto:{{from_email}}" style="color: #22c55e; text-decoration: none; font-weight: 600;">{{from_email}}</a></td>
        </tr>
        <tr>
          <td class="label">Téléphone</td>
          <td class="value"><a href="tel:{{phone}}" style="color: #0d1b2e; text-decoration: none; font-weight: 600;">{{phone}}</a></td>
        </tr>
        <tr>
          <td class="label">Service Souhaité</td>
          <td class="value"><span style="background-color: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 100px; font-weight: 700; font-size: 13.5px;">{{service}}</span></td>
        </tr>
      </table>
      
      <div class="message-title">Message ou précisions du client :</div>
      <div class="message-box">
        "{{message}}"
      </div>
      
      <div class="btn-container">
        <a href="mailto:{{from_email}}?subject=Re: Demande de consultation SolarPro" class="btn">Répondre Directement</a>
      </div>
    </div>
    <div class="footer">
      Cet e-mail de notification vous a été envoyé automatiquement depuis le formulaire de contact de <strong>SolarPro</strong>.<br>
      © 2026 SolarPro Maroc. Tous droits réservés.
    </div>
  </div>
</body>
</html>
```

---

## ⚡ Exemple d'Intégration du Code Client (React/Next.js)

Pour connecter votre formulaire de contact en frontend à EmailJS, installez d'abord le SDK EmailJS :

```bash
npm install @emailjs/browser
```

Ensuite, utilisez cette structure propre dans votre composant de formulaire React (comme `Contact.tsx`) :

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();

  // Objet contenant exactement les variables du template EmailJS
  const templateParams = {
    from_name: formData.name,       // Correspond à {{from_name}}
    from_email: formData.email,     // Correspond à {{from_email}}
    phone: formData.phone,           // Correspond à {{phone}}
    service: formData.service,       // Correspond à {{service}}
    message: formData.message,       // Correspond à {{message}}
  };

  emailjs.send(
    'YOUR_SERVICE_ID',     // ID de votre service de messagerie EmailJS
    'YOUR_TEMPLATE_ID',    // ID de ce template
    templateParams,
    'YOUR_PUBLIC_KEY'      // Votre clé publique EmailJS
  )
  .then((response) => {
     console.log('E-mail envoyé avec succès !', response.status, response.text);
     // Traitement de succès (ex: afficher le message de confirmation)
  }, (err) => {
     console.error('Erreur d\'envoi...', err);
  });
};
```

---
💡 *Développé avec soin pour une intégration professionnelle et instantanée.*
