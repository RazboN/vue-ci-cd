<template>
  <div class="anaSayfa">
    <img alt="Vue logo" src="../assets/logo.png" />
    <GirisSayfasi baslik="Bilgisayar Programcılığı Final Sınavı" />
    <h2>Deneme Ci-Cd - from dev branch</h2>

  </div>
</template>

<script>
// @ -> /src klasörünü işaret eder
import GirisSayfasi from '@/components/AnaSayfa.vue'

export default {
  name: 'AnaSayfa',
  components: {
    GirisSayfasi
  }
}
</script>
