<template>
<OverridenCard>
    <template #before>
        overriden before slot
    </template>
     <template #after>
        overriden before slot
    </template>
</OverridenCard>
</template>

<script setup>
import OverridenCard from "./OverridenCard.vue";
</script>