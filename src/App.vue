<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <figure class="image is-64x64 is-inline-block">
            <img src="./assets/logo.png"/>
          </figure>
          <h1 class="title">
            Local Star Labeller
          </h1>
          <div><b-button type="is-warning" icon-left="help-circle-outline" @click="isActive = !isActive"/></div>
          <b-message title="Коротко о главном..." type="is-warning" v-model="isActive" has-icon aria-close-label="Закрыть">
            <h2><strong>О системе</strong></h2>
            <p>Текущая конфигурация: файлы с сервера обсерватории,
              оба сервера приложений работают на бесплатном хостинге (могут отваливаться, это не страшно).
              Сервер базы данных тоже на бесплатном хостинге, на него пишется результат.
              <i>Риск (умеренный): Если он отвалится в части хранения данных... Бэкапирования нет.</i></p>
            <p>***</p>
            <p>
              Частично безопасность настроена. Тонкая настройка не доделана.
              <i>Риск (умеренный): чьи-то пытливые руки могут испортить данные классификации.</i>
            </p>
            <h2><strong>Минихелп</strong></h2>
            <p>Папки раскрываются двойным щелчком. Посли этого надо немного подождать,
              так как идет запрос на сервер с файлами. Отображаются только папки и файлы с данными (стоит фильтр).
              При однократном щелчке на файле раскрывается картинка и меню выбора класса (да/нет/не знаю),
              и кнопка сброса информации (например, если надо подумать и пока неизвестно, что ставить).
            </p>
            <p>***</p>
            <p>
              В силу конструкции из трех серверов и одного клиента, и обработки больших массивов "на лету"
              интерфейс, к сожалению, работает неспешно. При этом повторные клики и даблклики могут приводить к
              фэйлам (в силу срочности продукт сырой и не везде контроль таких действий прикручен).
            </p>
          </b-message>
        </div>
      </div>
    </section>
    <Config/>
  </div>
</template>

<script>
import Config from './components/Config.vue';

export default {
  name: 'App',
  components: {
    Config
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style>

</style>
