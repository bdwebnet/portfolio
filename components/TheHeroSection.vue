<script setup lang="ts">
import ArrowDown from '~/components/icons/ArrowDown.vue'
</script>

<template>
  <div id="hero-section">
    <h1>Hi!</h1>

    <p id="introduction-text">
      Ich bin <strong>Benedikt Dalferth</strong>, ein Web-Entwickler aus dem Raum Stuttgart.
      Ich kreiere Websites und Webanwendungen
      mit dem Fokus auf Benutzerfreundlichkeit und Datenschutz.
    </p>

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
  </div>
</template>

<style scoped lang="scss">
#hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  gap: $space;

  position: relative;

  h1 {
    font-size: 5em;
  }

  #introduction-text {
    font-size: 1.5em;
  }

  @media (min-width: $md) {
    #introduction-text {
      font-size: 2em;
    }
  }

  @media (min-width: $xl) {
    h1 {
      text-align: left;
    }
  }

  #scroll-down {
    display: none;
  }

  @media (min-width: $md) {
    #scroll-down {
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      bottom: 2vh;

      button {
        padding: inherit;
        border: none;
      }

      a, button {
        background-color: inherit;
        color: inherit;
        cursor: pointer;

        svg {
          width: 3em;
          height: auto;
        }
      }
    }
  }

  @media (min-width: $xl) {
    #scroll-down {
      position: absolute;
      left: auto;
      bottom: 5vh;

      a {
        padding: 5vh 0 0 0;
        box-sizing: content-box;
      }

      button {
        transition: $transition;

        &:hover {
          transform: translateY(2vh);
        }
      }
    }
  }
}
</style>
