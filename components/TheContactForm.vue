<script setup>
</script>

<template>
  <div>
    <form action="#" method="post">
      <fieldset>
        <p>
          <input id="name" type="text" required> <label for="name">Dein Name</label>
        </p>

        <p>
          <input id="email" type="email" required> <label for="email">Deine E-Mail-Adresse</label>
        </p>
      </fieldset>

      <fieldset>
        <textarea required />
      </fieldset>

      <fieldset id="buttons">
        <button type="submit">
          Absenden
        </button>
        <button type="reset">
          Abbrechen
        </button>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;

  fieldset {
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;

    p {
      display: flex;
      flex-direction: column;
      gap: 0.2em;
    }

    input {
      border: none;
      border-bottom: 1px solid $primary;
      padding: 0.3em 0;

      &:focus {
        border-bottom-width: 2px;
      }
    }

    input, textarea {
      background-color: inherit;
      font-size: inherit;
      color: inherit;
      font-family: inherit;

      &:focus {
        outline: none;
      }
    }

    textarea {
      resize: vertical;
      border: 1px solid $primary;
      padding: 0.5em;
      border-radius: 0.3em;

      &:focus {
        border-width: 2px;
      }
    }
  }

  #buttons {
    display: flex;
    gap: 1em;

    button {
      width: 100%;
    }
  }
}
</style>
