<template>
  <section>
    <b-collapse
        aria-id="contentIdForA11y2"
        class="panel"
        animation="slide">
      <template #trigger>
        <div
            class="panel-heading"
            role="button"
            aria-controls="contentIdForA11y2">
          <strong>Рабочие папки</strong>
          <div class="tags">
          <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
            {{file.name}}
          </span>
          </div>
        </div>
      </template>
      <div class="has-text-centered">
        Пожалуйста выберите корневую папку, содержащую файлы с данными. Индексация будет идти от корневой папки.
      </div>
      <div class="has-text-centered">
        <b-field>
          <b-upload v-model="dropFiles" multiple drag-drop expanded>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"></b-icon>
                </p>
                <p>Перетащите вашу <strong>папку</strong> с файлами сюда.
                  Если вы случайно перетащили сюда файл, просто удалите его из списка внизу, нажав на крестик.
                  Если папка была сконфигурирована ранее, она будет отображена внизу.
                  Программа будет обрабатывать все файлы в указанных ниже папках.</p>
              </div>
            </section>
          </b-upload>
        </b-field>
        <div class="tags">
          <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
            {{file.name}}
            <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
          </span>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "FileSelector",
  data() {
    return {
      file: {},
      dropFiles: []
    };
  },
  created() {
    this.dropFiles = [{ name: "C:/InitiallySelectedDir"}];
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
