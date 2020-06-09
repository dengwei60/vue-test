(function(Vue){
    // 实现私有变量
    //延长变量的生命周期
    Vue.component("todos-top",{
        template:`
        <section class="top">
            <!-- 标题栏 -->
            <section class="title">待办事项</section>
            <!-- 标题结束 -->
            <!-- 内容输入框 -->
            <section class="content">
                <!-- 是否全选的样式有变化 点击的功能有全选可反选功能-->
                <!-- 全选的按钮 -->
                <section :class="['left',{allch:allChecked}]"
                v-show="todos.length"
                 @click.stop="allcheckedEvent"
                 >v</section>
                 <!-- 输入框 -->
                 <!-- 输入的时候有一个下拉框 -->
                 <section class="todo-input">
                     <input  v-focus type="text" v-model="changeValue" @keyup.enter = "addtext"
                     @input = "showli"
                     placeholder="What needs to be done?"
                    >
                     <!-- 输入的事件时候还有一个下拉框 -->
                     <ul :class="['hidden',{show:inputting}]">
                         <li v-for="item,index in tips" @click.stop="addtips(item)">{{item}}</li>
                     </ul>
               </section>
            </section>
            
            <!-- 内容输入框结束 -->
        </section>
        `
    })
})(Vue)