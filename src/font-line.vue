<template>
<tr>
    <td><input type="checkbox" v-model="selected" @change="onSelect"></td>
    <td class="font-name-col">{{ fontName }}</td>
    <td :style="{fontFamily: fontName}">သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေးဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။</td>
    <td><a :href="'./fonts/' + fontName + '.ttf'">Download</a></td>
</tr>
</template>

<script>
export default {
  props: ['font'],
  data: function() {
      return {
          fontName: this.font.name,
          selected: this.font.selected
      }
  },
  methods: {
      onSelect: function() {
          this.$emit('select-font');
      }
  }
}
</script>

<style>
.font-name-col {
    width: 210px;
}
</style>