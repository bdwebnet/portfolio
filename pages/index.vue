<script setup lang="ts">
import ArrowDown from '~/components/icons/ArrowDown.vue'

useHead({ title: null })
</script>

<template>
  <div class="container">
    <section id="hero-section">
      <div>
        <h1>Hi!</h1>
      </div>

      <div>
        <p class="text-lg">
          Ich bin <strong>Benedikt Dalferth</strong>, ein Web-Entwickler aus dem Raum Stuttgart.
          Ich kreiere Websites und Webanwendungen mit dem Fokus auf Benutzerfreundlichkeit und Datenschutz.
        </p>
      </div>

      <div id="kontakt">
        <p>
          Du erreichst mich unter <a href="mailto:benedikt@dalferth.net">benedikt@dalferth.net</a>.
        </p>
      </div>

      <div id="scroll-down">
        <a href="#about" title="Zum Inhalt scrollen">
          <button>
            <ArrowDown />
          </button>
        </a>
      </div>
    </section>

    <section id="about" class="content-section">
      <div class="title">
        <h2>Über mich</h2>
      </div>

      <TheAboutSection class="content" />
    </section>

    <section class="content-section">
      <div class="title">
        <h2>Fähigkeiten</h2>
      </div>

      <TheSkillSection class="content" />
    </section>

    <section class="content-section">
      <div class="title">
        <h2>Projekte</h2>
      </div>

      <TheProjectSection class="content" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10em;
}

#hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  min-height: 100vh;
  position: relative;

  #scroll-down {
    position: absolute;
    right: 0;
    bottom: 5vh;

    a {
      padding: 1em 0;
      box-sizing: content-box;
    }

    button {
      padding: inherit;
    }

    a, button {
      background-color: inherit;
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
      transition: all ease-in-out 0.3s;
      cursor: pointer;

      svg {
        width: 3em;
        height: auto;
      }

      &:hover {
        transform: translateY(1.5em);
      }
    }
  }
}

.content-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;

  .title {
    text-align: right;

    h2 {
      margin: 0;
      text-transform: uppercase;
    }
  }

  .content {
    grid-column-start: 2;
    grid-column-end: 4;
    display: flex;
    flex-direction: column;
    gap: 1em;

    :deep(h3) {
      margin: 0;
    }

    :deep(p:first-child) {
      margin: 0;
    }

  }
}

</style>
