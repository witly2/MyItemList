<div class="formAdd modal-content">

    <div class="tableau">

        <label for="task-name">Nom du tableau</label>

        <input bind:value={tableName} type="text" id="task-name" placeholder="Entrer un nom">

    </div>

    <div class="description">

        <label for="description">Description</label>

        <textarea bind:value={tableDescription} id="description" placeholder="Entrer une description"></textarea>

    </div>



    <div class="actions d-flex justify-content-around w-25 small">

        <button class="cancel "   on:click={handleCloseForm}>Annuler</button>

        <button class="add-task bg-white border border-1 {disabledBtn}" on:click={addList} >Ajouter</button>

    </div>

</div>

<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let tableName = "";
    let tableDescription = "";
    let disabledBtn = !tableName || !tableDescription ? "disabled" : "";
    const addList = async () =>{
        fetch("http://localhost:3000/addTableau",{

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name:tableName,
                description: tableDescription
            }),
        })
            .then((response) => {
                if (response.status === 201) {
                    return response.json();
                } else {
                    throw new Error("Erreur !");
                }
            })
            .then((data) => {
                console.log('data', data)
              
            })
            .catch((error) => {
                console.log(error);
            });
    }
     const handleCloseForm = ()=>{
        dispatch('annuler')
    }
    
    
</script>

<style>

    .formAdd {


        margin: 50px auto;

        border: 1px solid #ccc;

        padding: 20px;

        border-radius: 5px;

    }


    .tableau,

    .description {

        margin-bottom: 10px;

    }


    .tableau label,

    .description label {

        display: block;

        margin-bottom: 5px;

        font-weight: bold;

    }


    .tableau input,

    .description textarea {

        width: 100%;

        padding: 10px;

        border: 1px solid #ccc;

        border-radius: 3px;

        box-sizing: border-box;

    }
    

    .actions {

        display: flex;

        justify-content: flex-end;

    }


    .actions button {

        padding: 10px 20px;

        border: none;

        border-radius: 3px;

        cursor: pointer;

    }


    .cancel {

        color: #f44336;

    }


    .add-task {
        color: #4CAF50;
    }
    
    .add-task:hover{
        background: #4CAF50;
        color: white;
        
    }

</style>