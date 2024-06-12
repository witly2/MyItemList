<script>
    import { onMount } from 'svelte';
    import 'bootstrap/dist/css/bootstrap.min.css'
    import FormAddList from '../components/formAddList.svelte';
    import Card from "../components/card.svelte";
    import BtnAddList from '../components/btnAddList.svelte';
    import NavLayout from '../layout/navLayout.svelte';
    let lstTableaux = [];


    
    let showModal = false;
    let compteur = 0

    const handleBtnAddListClick  = () => {

        showModal = true;
        console.log("sh", showModal)

    };

    const handleBtnCloseAddListClick  = () => {

        showModal = false;

    };

    
    
   
    onMount(async () => {
        //document.body.style.smargin = 0;
        await getTableaux()
    });

    const getTableaux = async () => {
        await fetch(`http://localhost:3000/tableaux`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
               
            },
        })
            .then(response => response.json())
            .then(data => {
                 lstTableaux = data.listes
                console.log("name",  lstTableaux[0])

            })
            .catch(error => {
                console.log(error);
            });
        
    }

</script>



<div class="container d-flex">
    
    <NavLayout>
        <div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M3.92 8.142l1.415 1.414L8 5.828l2.585 2.586 1.415-1.414L8 4.242l-2.585 2.586L3.92 8.142z"/>
        </svg>
      </span>
            <span> {lstTableaux.length} tasks</span>
        </div>

        <div class="d-flex flex-wrap">

            {#each lstTableaux as tab, index}
                <Card tableauName= {tab["name"]}/>

                {#if (lstTableaux.length-1) ===index}
                    <BtnAddList on:click={handleBtnAddListClick}/>
                {/if}

            {/each}

        </div>

        {#if showModal}
            <FormAddList on:annuler="{handleBtnCloseAddListClick}"/>
        {/if}

    </NavLayout>
    
</div>



<style lang="scss">
    .container {
        height: 100vh;
    }

   

</style>