<template>
    <div id="app">
        <Button :text="text" bgColor="green"></Button>
    </div>
</template>

<script>

import Button from "./simplebutton.vue"

export default {
    name: 'app',
    data() {
        return {
            text: 'Hello',
        }
    },
    components: {
        Button
    }
}
</script>