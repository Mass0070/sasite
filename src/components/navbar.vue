<template>
    <nav>
        <div class="menu-item"><a href="/">Hjem</a></div>
        <div class="menu-item"><a href="/ansøg">Ansøg</a></div>
        <Droptown v-if="profile === true" title="Profile" :items="services" />
        <div v-else class="menu-item"><a href="https://discord.com/oauth2/authorize?client_id=694582426474774570&redirect_uri=http%3A%2F%2Fsuperawesome.ml%2Fauth%2F&response_type=token&scope=identify">Login</a></div>
    </nav>
</template>

<script defer>
import Droptown from './Dropdown'
import Axios from 'axios'

export default {
    name: 'navbar',
    components: {
        Droptown
    },
    data () {
        return {
            services: [
                {
                    title: 'Mine ansøgninger',
                    link: '/profile'
                },
                {
                    title: 'Log ud',
                    link: '/logout'
                }
            ],
            profile: false
        }
    },
    async created() {
        Axios.get('https://api.superawesome.ml/api/auth/', 
        {
            headers: {
                "API-Key": `${localStorage.token}`
            }
        })
        .then(Response => {
            this.profile = true;
        })
        .catch((error) => {
            if(error.response) {
                switch(error.response.status) {
                case 200:
                    this.profile = true
                    break;
                case 403:
                    break;
                }
            }
        })
    }
}
</script>

<style>
hr {
  height: 1px;
  background: linear-gradient(to right, blue, green);
  border: none;
}
.Bar {
  height: 2px;
  background: linear-gradient(to right, blue, green);
  border: none;
}
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}
</style>
