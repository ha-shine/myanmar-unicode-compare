<template>
    <nav class="level">
        <div class="level-left">
            <p class="level-item"><a :class="{'button is-success': active === 0}" @click="changeActive(0)">All</a></p>
            <p class="level-item"><a :class="{'button is-success': active === 1}" @click="changeActive(1)">Compare</a></p>
        </div>
    </nav>
</template>

<script>
export default {
  props: ['active'],
  methods: {
      changeActive: function(active) {
          this.$emit('change-active', active)
      }
  }
}
</script>

