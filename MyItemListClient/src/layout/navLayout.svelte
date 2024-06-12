<script>
    import { onMount } from 'svelte';
    import 'bootstrap/dist/css/bootstrap.min.css'
    import VerticalNav from '../components/verticalNav.svelte';
   

    onMount(() => {
        //document.body.style.smargin = 0;
    });
</script>



<div class="container d-flex">
    <VerticalNav/>
    <div class="bord ">
        <div class="bord-title">MyItemList</div>
      
        <slot>
            
        </slot>
    </div>
</div>



<style lang="scss">
  .container {
    height: 100vh;
  }



  .bord {
    flex: 1;
    padding: 20px;
  }

  .bord-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

</style>