<template>
  <div v-if="loaded" class="settings">
    <workshop-header-component :title="header"></workshop-header-component>
    <v-navigation-drawer id="sidenav" app :right="drawer.isRight" v-model="drawer.isOpen" :width="$store.state.css.workshops.drawerWidth"
      hide-overlay>
      <v-toolbar flat>
        <v-btn @click="drawer.isOpen=!drawer.isOpen" icon>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <v-list class="py-0">
        <v-list-tile @click="$router.push({name: 'editPersonalInfo'})" >
          <v-list-tile-action>
            <v-icon :color="`grey`">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{i18n.editPersonalInfo}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile  @click="$router.push({name: 'changeTrack'})">
          <v-list-tile-action>
            <v-icon :color="`grey`">compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{i18n.changeTrack}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile  @click="$router.push({name: 'changePassword'})">
          <v-list-tile-action>
            <v-icon :color="`grey`">lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{i18n.changePassword}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div class="content">
      <router-view ></router-view>
    </div>
  </div>
</template>
<script src="./profile-settings.js"></script>
<style src="./profile-settings.scss" lang="scss" ></style>
