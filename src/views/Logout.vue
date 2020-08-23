<template>
    
</template>

<script>
export default {
    mounted () {
        if(window.localStorage.token) {
            window.localStorage.removeItem("token") 
        }
        window.location.replace("/")
    }
}
</script>