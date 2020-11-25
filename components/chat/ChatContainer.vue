<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="chat-container">
          <chat-message
            v-for="message in messages"
            :key="message.id"
            v-bind="message"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      messages: 'chat/list',
    }),
  },
  methods: {
    ...mapMutations({
      add: 'chat/add',
    }),
  },
}
</script>

<style scoped>
.chat-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
