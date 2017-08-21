<template>
<!--生成相应的el-menu-item项-->
	<div class='menu-wrapper'>
		<template v-for="(item,index) in routes">

			<router-link :key="index" v-if="!item.hidden&&item.noDropDown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
				<el-menu-item :index="item.path+'/'+item.children[0].path"  class='submenu-title-noDropdown'>
					<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg><span slot="title">{{item.children[0].name}}</span>
				</el-menu-item>
			</router-link>

			<el-submenu :key="index" :index="item.name" v-if="!item.noDropDown&&!item.hidden">
				<template slot="title">
					<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg><span>{{item.name}}</span>
				</template>
				<template v-for="(child,index) in item.children" v-if='!child.hidden'>

					<sidebar-item :key="index" class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
					
					<router-link :key="index" v-else :to="item.path+'/'+child.path">
						<el-menu-item :index="item.path+'/'+child.path">
								<icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg><span>{{child.name}}</span>
						</el-menu-item>
					</router-link>
				
				</template>
			</el-submenu>
		</template>
	</div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>
