<script setup lang="ts">
import projects from '~/utils/projects'
import skills from '~/utils/skills'
import TheContactForm from '~/components/TheContactForm.vue'
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

      <div>
        <p>
          Du erreichst mich unter <a href="mailto:benedikt@dalferth.net">benedikt@dalferth.net</a>.
        </p>
      </div>

      <div id="scroll-down">
        <a href="#content" title="Zum Inhalt scrollen">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-chevron-double-down"
              viewBox="0 0 16 16"
              role="img"
            >
              <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </a>
      </div>
    </section>

    <section id="content" class="content-section">
      <div class="title">
        <h2>Über mich</h2>
      </div>

      <div class="content">
        <p>
          Seit <strong>über 7 Jahren</strong> beschäftige ich mich mit dem Thema Programmierung, insbesondere der Web-Entwicklung.
        </p>
        <p>
          test
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="title">
        <h2>Fähigkeiten</h2>
      </div>

      <div class="content">
        <div id="skills">
          <div v-for="(skill, index) in skills" :key="index">
            <a v-if="skill.link" :href="skill.link" target="_blank" :title="skill.title" class="skill-content">
              <div class="icon" :style="`fill: ${skill.color}`" v-html="skill.icon" />
              <h3>{{ skill.title }}</h3>
            </a>
            <div v-else class="skill-content">
              <div class="icon" :style="`fill: ${skill.color}`" v-html="skill.icon" />
              <h3>{{ skill.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="title">
        <h2>Projekte</h2>
      </div>

      <div id="projects" class="content">
        <div v-for="(project, index) in projects" :key="index">
          <a :href="project.link" target="_blank">
            <h3>{{ project.title }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-double-right"
                viewBox="0 0 16 16"
                role="img"
              >
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg></h3>

            <p>{{ project.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <section id="kontakt" class="content-section">
      <div class="title">
        <h2>Kontakt</h2>
      </div>
      <div class="content">
        <TheContactForm />
      </div>
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

    h3 {
      margin: 0;
    }

    p:first-child {
      margin: 0;
    }

    &#projects a {
      text-decoration: none;
      color: inherit;

      h3 svg {
        transition: all 0.2s ease-in-out;
      }

      &:hover h3 svg {
        margin-left: 0.4em;
      }
    }
  }
}

#skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3em;

  .skill-content {
    text-decoration: none;
    padding: 0;
    background-color: inherit;
    color: inherit;
    filter: saturate(0) brightness(0);
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease-in-out;

    .icon {
      width: 3em;

      svg {
        width: 100%;
        height: auto;
      }
    }

    &:hover {
      filter: saturate(1);
      opacity: 1;
      transform: scale(110%);
      cursor: pointer;
    }
  }
}
</style>
