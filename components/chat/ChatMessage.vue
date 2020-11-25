<template>
  <v-container class="chat-message">
    <v-card dark>
      <v-card-title class="headline"> {{ author }} </v-card-title>
      <v-card-subtitle>
        {{ content }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.chat-message {
  margin: 0px, 0px;
}
</style>
