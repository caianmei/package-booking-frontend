<template>
  <div>
    <a-table bordered :dataSource="dataSource" :columns="columns">
      <template slot="id" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.id, 'key', $event)"/>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.id)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
      dataSource: this.$store.getters.getPackages,
      count: 2,
      columns: [{
        title: '订单编号',
        dataIndex: 'id',
        width: '30%',
        scopedSlots: { customRender: 'key' },
      },{
        title: '收件人',
        dataIndex: 'receiver',
      }, {
        title: '电话',
        dataIndex: 'telPhone',
      }, {
        title: '状态',
        dataIndex: 'status',
      }, {
        title: '预约时间',
        dataIndex: 'fetchTime',
        scopedSlots: { customRender: 'fetchTime' },
      }, {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      }],
    }
  },
  methods: {
    onCellChange (key, dataIndex, value) {
        const dataSource = [...this.dataSource]
        const target = dataSource.find(item => item.key === key)
        if (target) {
          target[dataIndex] = value
          this.dataSource = dataSource
        }
    },
    onDelete (key) {
      alert(key)
      //this.dataSource = dataSource.filter(item => item.key !== key)
    },
  },
}
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
