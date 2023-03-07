<script setup lang="ts">
import ArrowDown from '~/components/icons/ArrowDown.vue'
import animation from 'assets/js/animation'

onMounted(() => {
  animation()
})
</script>

<template>
  <div id="hero-section-wrapper" class="fade-in">
    <div class="social-icons">
      <div v-for="(social, index) in socials" :key="index">
        <a
          v-if="social.link"
          :href="social.link"
          target="_blank"
          :title="social.title"
        >
          <div class="icon" :style="`fill: ${social.color}`" v-html="social.icon" />
        </a>
      </div>
    </div>

    <h1>
      <a href="#hero-section">Hi!</a>
    </h1>

    <p id="introduction-text">
      Ich bin <strong>Benedikt</strong>, ein Webentwickler aus dem Raum Stuttgart
      mit dem Fokus auf Benutzerfreundlichkeit und Datenschutz.
    </p>

    <div id="scroll-down">
      <a href="#about" title="Zum Inhalt scrollen">
        <button title="Zum Inhalt scrollen">
          <ArrowDown />
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
#hero-section-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  gap: $space;

  a {
    background-image: none;
  }

  position: relative;

  .social-icons {
    display: flex;
    position: absolute;
    top: 3vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: $space;

    .icon {
      width: 1.5em;
      filter: saturate(0) brightness(0);
      opacity: 0.7;
      transition: $transition;

      svg {
        width: 100%;
        height: auto;
      }

      &:hover {
        filter: none;
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  @media (min-width: $md) {
    .social-icons {
      top: 5vh;
      right: 0;
    }
  }

  @media (min-width: $xl) {
    .social-icons {
      width: fit-content;
    }
  }

  h1 {
    font-size: 5em;
  }

  #introduction-text {
    font-size: 1.5em;
  }

  @media (min-width: $md) {
    #introduction-text {
      font-size: 2.5em;
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
