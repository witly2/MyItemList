<div class="formAdd modal-content">

    <div class="tableau">

        <label for="task-name">Nom du tableau</label>

        <input type="text" id="task-name" placeholder="Enter task name">

    </div>

    <div class="description">

        <label for="description">Description</label>

        <textarea id="description" placeholder="Enter task description"></textarea>

    </div>



    <div class="actions d-flex justify-content-around w-25 small">

        <button class="cancel">Annuler</button>

        <button class="add-task bg-white border border-1">Ajouter</button>

    </div>

</div>

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

</style>