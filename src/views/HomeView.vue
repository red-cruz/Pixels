<template>
  <main>
    <header>
      <div class="input-group">
        {{ url }}
        <input
          type="number"
          min="1"
          max="5000"
          name="quantity"
          class="quantity-field"
          :value="id"
          @input="updateId"
          size="7"
        />
        <input type="button" value="-" class="button-minus" @click="id == 1 ? null : id--" />
        <input type="button" value="+" class="button-plus" @click="id == 5000 ? null : id++" />
      </div>
    </header>

    <iframe :src="link" frameborder="0"></iframe>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

const id = ref(1)
const url = 'https://play.pixels.xyz/pixels/share/'
const link = computed(() => url + id.value)

function updateId(e) {
  const val = e.target.value
  if (val > 5000 || val < 1) {
    return false
  }
  id.value = val
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 90vh;
}
input,
textarea {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 10px;
}

input[type='button'] {
  -webkit-appearance: button;
  appearance: button;
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input-group {
  clear: both;
  margin: 15px 0 0;
  position: relative;
}

.input-group input[type='button'] {
  background-color: #eeeeee;
  min-width: 38px;
  width: auto;
  transition: all 300ms ease;
}

.input-group .button-minus,
.input-group .button-plus {
  font-weight: bold;
  height: 38px;
  padding: 0;
  width: 38px;
  position: relative;
}

.input-group .quantity-field {
  position: relative;
  height: 38px;
  text-align: center;
  width: auto;
  display: inline-block;
  font-size: 13px;
  margin: 0 0 5px;
  resize: vertical;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: none;
  -webkit-appearance: none;
}
</style>
