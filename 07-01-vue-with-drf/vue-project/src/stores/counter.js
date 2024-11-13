import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { compileScript } from 'vue/compiler-sfc'

export const useCounterStore = defineStore('counter', () => {
  // const articles = ref([
    // { id : 1, title: 'article 1', content: 'content 1'},
    // { id : 2, title: 'article 2', content: 'content 2'},
  // ])
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'

  // DRF로 전체 게시글 요청을 보내고 응답을 받아 articles에 저장하는 함수
  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`
    })
    .then((res) => {
      // console.log(res.data)
      articles.value = res.data  // 장고가 준 데이터를 vue가 받아서 띄움
    })
    .catch((err) => console.log(err))
  }

  return { articles, API_URL, getArticles }
}, { persist: true })
