<template>

    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <p>
                        <span class="tag is-info is-medium">#{{item.id}}</span>
                        <span class="is-size-5">
                            {{item.text}}
                        </span>
                    </p>
                </div>

            </div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'TaskLaneItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 10px !important;
}
</style>
