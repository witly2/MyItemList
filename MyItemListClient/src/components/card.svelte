<div class="m-3">

    <div class="card opacity-1" style="background-image: url({imgBg});">
        
        <div class="card-header ">
            <h5 class="card-title mt-3 small text-white  py-1 fw-bold">{tableauName}</h5>
        </div>
        
     

    </div>

</div>

<script>
    export let tableauName = ""
    const imgBg = "https://picsum.photos/300/200?" + tableauName
    
</script>


<style>

    .card {

        border: none;
        width: 200px;
        height: 120px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    }





   


</style>