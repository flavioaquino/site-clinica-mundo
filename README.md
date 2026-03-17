# 🏥 Site Clínica Mundo - Desenvolvimento Infantojuvenil

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/flavioaquinos-projects/v0-site-clone-das-fotos)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)

## 📋 Sobre o Projeto

Site institucional moderno e responsivo para a **Clínica Mundo**, especializada em desenvolvimento infantojuvenil na região da Savassi, Belo Horizonte - MG.

### ✨ Recursos Principais

- 🎨 Design moderno e acolhedor
- 📱 100% responsivo (mobile, tablet, desktop)
- ⚡ Performance otimizada com Next.js 14
- 🎯 Foco em conversão (agendamentos via WhatsApp)
- 💬 Seção de depoimentos com carrossel
- 🏆 Exibição de certificados e convênios
- 🗺️ Localização privilegiada na Savassi

## 🚀 Últimas Atualizações (13/10/2025)

### Header Melhorado
- ✅ Logo aumentada e com mais destaque
- ✅ Subtítulo "Desenvolvimento Infantojuvenil" adicionado
- ✅ Melhor contraste visual

### Hero Section Redesenhada
- ✅ Título e subtítulo centralizados
- ✅ Texto de apresentação otimizado
- ✅ Lista de diferenciais com checkmarks
- ✅ Mapa interativo substituído por imagem estática
- ✅ Botão "Como Chegar" adicionado

### Novas Seções
- ✅ **Depoimentos das Famílias**: carrossel com avaliações reais
- ✅ **Certificados e Convênios**: credibilidade e transparência

## 🛠️ Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Linguagem**: TypeScript
- **Deploy**: Vercel

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/flavioaquino/site-clinica-mundo.git

# Entre na pasta
cd site-clinica-mundo

# Instale as dependências
pnpm install
# ou
npm install

# Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

Acesse: **http://localhost:3000**

## 📚 Documentação

Este projeto inclui documentação completa para facilitar a manutenção:

- 📄 **[RESUMO-ALTERACOES.md](./RESUMO-ALTERACOES.md)** - Lista detalhada de todas as melhorias
- 🎨 **[GUIA-PERSONALIZACAO.md](./GUIA-PERSONALIZACAO.md)** - Como personalizar o site
- 🗺️ **[INSTRUCOES-MAPA.md](./INSTRUCOES-MAPA.md)** - Como adicionar a imagem do mapa
- ✅ **[COMO-TESTAR.md](./COMO-TESTAR.md)** - Checklist de validação

## 📂 Estrutura do Projeto

```
site-clinica-mundo/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos globais
├── components/
│   ├── header.tsx            # ✨ Atualizado - Logo maior + subtítulo
│   ├── hero-section.tsx      # ✨ Atualizado - Novo layout
│   ├── specialties-section.tsx
│   ├── space-section.tsx
│   ├── professional-section.tsx
│   ├── testimonials-section.tsx      # 🆕 Novo - Depoimentos
│   ├── certifications-section.tsx    # 🆕 Novo - Certificados
│   ├── mission-section.tsx
│   ├── footer.tsx
│   └── ui/                   # Componentes shadcn/ui
├── public/
│   └── images/               # Adicione suas imagens aqui
└── lib/
    └── utils.ts
```

## 🎯 Funcionalidades

### Seções do Site
1. **Header** - Logo, menu de navegação
2. **Hero** - Apresentação, localização, call-to-actions
3. **Especialidades** - Serviços oferecidos
4. **Nosso Espaço** - Fotos e descrição das instalações
5. **Equipe** - Profissionais da clínica
6. **Depoimentos** - Avaliações das famílias (carrossel)
7. **Certificados** - Certificações, convênios e selos
8. **Missão** - Valores da clínica
9. **Footer** - Contato, horários, redes sociais

### Integrações
- 📱 WhatsApp para agendamentos
- 🗺️ Google Maps para localização
- 📷 Instagram

## 🎨 Personalização

### Alterar Cores
Edite `tailwind.config.ts` para personalizar a paleta de cores.

### Adicionar Depoimentos
Edite `components/testimonials-section.tsx` e siga a estrutura:
```typescript
{
  id: 1,
  name: "Nome",
  relation: "Vínculo",
  text: "Depoimento...",
  rating: 5
}
```

### Adicionar Convênios
Edite `components/certifications-section.tsx` e adicione à lista.

Ver **[GUIA-PERSONALIZACAO.md](./GUIA-PERSONALIZACAO.md)** para mais detalhes.

## 📞 Contato

- **WhatsApp**: (31) 97555-7435
- **Email**: mundodesenvolvimentoinfantil@gmail.com
- **Instagram**: [@clinica.mundo](https://www.instagram.com/clinica.mundo/)
- **Localização**: Av. do Contorno, 6321, 6º andar - Bairro São Pedro, Belo Horizonte - MG

## 🚀 Deploy

O site está configurado para deploy automático na Vercel:

**[https://vercel.com/flavioaquinos-projects/v0-site-clone-das-fotos](https://vercel.com/flavioaquinos-projects/v0-site-clone-das-fotos)**

### Deploy Manual
```bash
pnpm build
pnpm start
```

## 📝 TODO

- [ ] Adicionar imagem real do mapa
- [ ] Substituir depoimentos de exemplo por reais
- [ ] Adicionar logos dos convênios
- [ ] Fotos profissionais do espaço
- [ ] Configurar Google Analytics
- [ ] Adicionar meta tags SEO
- [ ] Implementar sitemap.xml

## 📄 Licença

Este projeto é propriedade da **Clínica Mundo**.

---

**Desenvolvido com ❤️ para promover o desenvolvimento infantojuvenil**

