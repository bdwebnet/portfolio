<template>
  <div>
    <form action="#" method="post">
      <fieldset>
        <legend>Deine Angaben</legend>

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

      <fieldset>
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

<script setup>
</script>

<style scoped>

</style>
