<template>
  <div class="page-container drawer-page-content">
    <main id="MainContent" class="main-content js-focus-hidden" role="main" tabindex="-1">
      <div class="page-width">
        <div class="empty-page-content text-center">
          <h1 v-if="error.statusCode === 404">
            {{ $t('general.404.title') }}
          </h1>
          <h1 v-else>
            {{ $t('general.500.title') }}
          </h1>
          <p v-if="error.statusCode === 404">
            {{ $t('general.404.subtext') }}
          </p>
          <p>
            <nuxt-link :to="localePath('index')" class="btn btn--has-icon-after">
              {{ $t('general.404.link') }}
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon--wide icon-arrow-right"
                viewBox="0 0 20 8"
              >
                <!-- eslint-disable-next-line -->
                <path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd" />
              </svg>
            </nuxt-link>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

interface Error {
  statusCode: number;
}

@Component
export default class ErrorPage extends Vue {
    @Prop({ type: Object, default: { statusCode: 404 } })
    readonly error!: Error
}

</script>
