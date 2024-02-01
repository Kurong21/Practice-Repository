<template>
    <button :style="{ backgroundColor: bgColor }">{{ text }}</button>
</template>

<script>

export default {
    name: 'Button',
    props: {
        text: String,
        bgColor: String
    }
}

</script>