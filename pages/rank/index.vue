<template>
  <div>
    <el-input :placeholder="'请输入' + $t('clan.tag')" v-model="clanTag" @keyup.enter.native="getRankInfoByTag()">
      <template slot="prepend">{{ $t('clan.tag') }}</template>
      <el-button slot="append" icon="el-icon-search" @click="getRankInfoByTag()"></el-button>
    </el-input>
    <hr>
    <template v-if="clanTag">
      <more-info :clanTags="clanTags"></more-info>
    </template>
    <template v-else>
      <div class="text-center">
        输入部落标签进行搜索~
        <br>
        因为需要对部落成员每个人的信息进行查询，所以可能较为缓慢，请稍等一会儿~
      </div>
    </template>
  </div>
</template>

<script>
import MoreInfo from '~/components/rank/MoreInfo'

export default {
  data () {
    return {
      clanTag: '',
      clanTags: [],
    }
  },
  components: {
    MoreInfo
  },
  methods: {
    getRankInfoByTag () {
      this.clanTags = []
      this.clanTags.push(this.clanTag)
      console.log(this.clanTags)
    }
  },
}
</script>

<style>

</style>
