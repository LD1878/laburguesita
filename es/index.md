---
layout: home
lang: es
title: "La Burguesita Málaga – Hamburguesería Gourmet desde 2010"
meta_description: "Mejores hamburguesas gourmet de Málaga. Carne madurada 45 días, pan brioche artesano, ingredientes locales. Centro y Cerrado de Calderón."
permalink: /es/
schema: restaurant
h1: "La Hamburguesa Gourmet de Málaga"
hero_image: "[HIGH-QUALITY-BURGER-IMAGE-HERO]"
alt_hero: "Hamburguesa gourmet con queso fundido, bacon crujiente y carne jugosa sobre fondo negro"
trust_badges:
  - "Desde 2010"
  - "Premio Mejor Hamburguesa Gourmet 2023"
  - "+150.000 Hamburguesas Servidas"
cta_primary:
  text: "Ver Carta"
  link: "/menu/"
cta_secondary:
  text: "Reservar Mesa"
  link: "/contacto/"
---

<section class="hero-section full-black-bg">
  <div class="hero-content">
    <h1 class="hero-title">{{ page.h1 }}</h1>
    <p class="hero-subtitle">Carne madurada · Pan brioche · Ingredientes de Málaga</p>
    <div class="hero-cta">
      <a href="{{ page.cta_primary.link }}" class="btn btn-primary">{{ page.cta_primary.text }}</a>
      <a href="{{ page.cta_secondary.link }}" class="btn btn-outline">{{ page.cta_secondary.text }}</a>
    </div>
  </div>
  <img src="{{ page.hero_image }}" alt="{{ page.alt_hero }}" class="hero-image">
</section>

<section class="trust-section">
  <div class="container">
    <div class="trust-grid">
      {% for badge in page.trust_badges %}
        <div class="trust-item">
          <span class="trust-number">{{ badge }}</span>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="story-preview">
  <div class="container grid-2col">
    <div class="story-text">
      <h2>El sabor que cambió Málaga</h2>
      <p>En 2010 abrimos la primera hamburguesería gourmet de la ciudad. Sin atajos: carne de vaca madura seleccionada, pan de brioche horneado cada mañana, y productos de nuestra tierra. Aquí nació la revolución de la hamburguesa con alma malagueña.</p>
      <a href="/es/sobre-nosotros/" class="btn btn-text">Conoce nuestra historia →</a>
    </div>
    <div class="story-image">
      <img src="[MARTA-NUNEZ-PHOTO]" alt="Marta Núñez, fundadora de La Burguesita, sonriendo en el restaurante">
    </div>
  </div>
</section>

<section class="locations-preview">
  <div class="container">
    <h2>Dos Casas, Una Pasión</h2>
    <div class="location-cards">
      <a href="/es/ubicaciones/#centro" class="location-card">
        <img src="[LOCATION-CENTRO-PHOTO]" alt="Interior del local Centro, mesas de madera y luz cálida" loading="lazy">
        <h3>Centro Histórico</h3>
        <p>Calle Granada, 12 · Málaga</p>
      </a>
      <a href="/es/ubicaciones/#cerrado" class="location-card">
        <img src="[LOCATION-CERRADO-PHOTO]" alt="Terraza en Cerrado de Calderón con vistas al mar" loading="lazy">
        <h3>Cerrado de Calderón</h3>
        <p>Avda. del Mar, 45 · Urbanización Cerrado</p>
      </a>
    </div>
  </div>
</section>

<section class="instagram-feed">
  <h2>@laburguesitamlg</h2>
  <div class="ig-grid" data-placeholder="[INSTAGRAM-WIDGET-PLACEHOLDER]">
    <!-- Placeholder for Instagram feed, no JS required for static -->
    <img src="[GALLERY-1]" alt="Burger con huevo y cheddar">
    <img src="[GALLERY-2]" alt="Patatas trufadas">
    <img src="[GALLERY-3]" alt="Cóctel negroni">
    <img src="[GALLERY-4]" alt="Detalle carne jugosa">
  </div>
</section>
