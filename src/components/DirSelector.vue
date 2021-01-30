<template>
  <section>
    <b-menu>
      <b-menu-list label="Файлы">
        <b-menu-item icon="computer-classic" label="Info"></b-menu-item>
        <b-menu-item icon="folder" :active="isActive" expanded>
          <template #label="props">
            Administrator
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
          </template>
          <b-menu-item icon="file-document-outline" label="Users"></b-menu-item>
          <b-menu-item icon="file-document-outline">
            <template #label>
              Devices
              <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                <template #trigger>
                  <b-icon icon="dots-vertical"></b-icon>
                </template>
                <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
              </b-dropdown>
            </template>
          </b-menu-item>
          <b-menu-item icon="file-lock-outline" label="Payments" disabled></b-menu-item>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </section>
</template>

<script>
export default {
name: "DirSelector"
}
</script>

<style scoped>

</style>
