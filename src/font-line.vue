<template>
<tr>
    <td><input type="checkbox" v-model="selected" @change="onSelect"></td>
    <td class="font-name-col">{{ fontName }}</td>
    <td :style="{fontFamily: fontName}">ကခဂဃငစဆဇဈညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠအ ကိုကြီး မှီခို ချောက် ချွတ် ကြိုက် ၁၂၃၄၅၆၇၈၉၀</td>
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