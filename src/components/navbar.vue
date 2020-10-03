<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Super<span>Awesome</span></b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="/ansøg" center>
                Ansøg
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown v-if="profile === true" right>
                <template v-slot:button-content>
                    <em>Profil</em>
                </template>
                <b-dropdown-item href="/profile">Profil</b-dropdown-item>
                <b-dropdown-item href="/logout">Log ud</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else href="https://discord.com/api/oauth2/authorize?client_id=694582426474774570&redirect_uri=https%3A%2F%2Fsuperawesome.ml%2Fauth%2F&response_type=token&scope=identify">Log ind</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script defer>
import Axios from 'axios'
import css from '../views/Navbar.css'

export default {
    name: 'navbar',
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
        .then(() => {
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
