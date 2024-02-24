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
        <input
          type="button"
          value="<- previous"
          class="button-minus"
          @click="id == 1 ? null : id-- && show()"
        />
        <input
          type="button"
          value="next ->"
          class="button-plus"
          @click="id == 5000 ? null : id++ && show()"
        />
        <CopyButton :text="id" />
      </div>
    </header>
    <iframe :src="link" frameborder="0"></iframe>
  </main>
  <GitHub />
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { toast } from '../modules/swal'
import Swal from 'sweetalert2'
import CopyButton from '@/components/CopyButton.vue'
import GitHub from '@/components/GitHub.vue'

const id = ref(localStorage.getItem('id') ? Number(localStorage.getItem('id')) : 1)
const url = 'https://play.pixels.xyz/pixels/share/'
const link = computed(() => url + id.value)

watch(id, (newVal) => {
  localStorage.setItem('id', String(newVal))
})

function show() {
  toast({
    title: 'Warping to map #' + id.value,
    text: 'This may take a few seconds...',
    icon: 'info',
    didOpen() {
      Swal.showLoading()
    }
  })
}

function updateId(e) {
  const val = e.target.value
  if (val > 5000 || val < 1) {
    return false
  }
  id.value = val
  show()
}
</script>

<style lang="scss">
body {
  overflow: auto;
  background-color: #622aff;
  color: white;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 14px;
  font-weight: bold;
}
iframe {
  width: 100%;
  height: 80vh;
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
  padding: 10px !important;
  margin-bottom: 10px;
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
  font-family: monospace;
  height: 38px;
  padding: 0;
  width: 38px;
  position: relative;
}
.input-group .button-plus {
  margin-left: 1px;
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
