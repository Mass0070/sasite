<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon :color="item.color">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          prepend-icon="mdi-account-circle"
          no-action
          router
          exact
          group=unban|supporter
        >
          <template #activator>
            <v-list-item-title>Ansøgning</v-list-item-title>
          </template>
          <v-list-item
            v-for="([title, icon, url], i) in cruds"
            :key="i"
            link
            :to="url"
          >
            <v-list-item-title v-text="title" />

            <v-list-item-icon>
              <v-icon v-text="icon" />
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <div style="position: absolute; bottom: 0em">
          <v-divider />
          <v-list-item>
            <v-list-item-avatar left>
              <v-img
                src="https://crafthead.net/helm/Itz_Hoffe"
              />
            </v-list-item-avatar>
            <v-select
              v-model="select"
              :menu-props="{ auto: true }"
              :items="accounts"
            />
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <superawesome />
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-list-item>
          <v-menu offset-y open-on-hover>
            <template #activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
              >
                Itz_Hoffe
                <v-avatar size="30" style="margin-left: 10px;">
                  <v-img src="https://crafthead.net/helm/Itz_Hoffe" />
                </v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                link
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: true,
      select: null,
      accounts: [],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Hjem',
          to: '/'
        },
        {
          icon: 'mdi-ticket',
          title: 'Tickets',
          to: '/tickets'
        },
        {
          icon: 'mdi-shield-account-variant',
          title: 'Staffs teamet',
          to: '/staffs'
        }
      ],
      miniVariant: false,
      cruds: [
        ['Supporter', 'mdi-plus-outline', '/supporter'],
        ['Unban', 'mdi-file-outline', '/unban']
      ]
    }
  }
}
</script>
