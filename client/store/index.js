export const state = () => ({
  hello: "vuex",
});

export const mutations = {
  setHello(state, payload) {
    state.hello = payload;
  },
  // addMainPosts(state, payload) {
  //   state.mainPosts.unshift(payload);
  // },
};

// export const state = () => ({
// baseURL: runtimeConfig.baseURL || '',
// timeout: runtimeConfig.timeout || 30000,
// withCredentials: runtimeConfig.withCredentials || false,
// headers: runtimeConfig.headers || {},
// responseType: runtimeConfig.responseType || 'json',
// xsrfCookieName: runtimeConfig.xsrfCookieName || 'XSRF-TOKEN',
// xsrfHeaderName: runtimeConfig.xsrfHeaderName || 'X-XSRF-TOKEN',
// maxContentLength: runtimeConfig.maxContentLength || 2000,
// validateStatus: runtimeConfig.validateStatus || (status => status >= 200 && status < 300),
// maxRedirects: runtimeConfig.maxRedirects || 5,
// httpAgent: runtimeConfig.httpAgent || undefined,
// httpsAgent: runtimeConfig.httpsAgent || undefined,
// proxy: runtimeConfig.proxy || undefined,
// cancelToken: runtimeConfig.cancelToken || undefined,
// progress: runtimeConfig.progress || false,
// onUploadProgress: runtimeConfig.onUploadProgress || undefined,
// onDownloadProgress: runtimeConfig.onDownloadProgress || undefined,
// maxRedirects: runtimeConfig.maxRedirects || 5,
// });
