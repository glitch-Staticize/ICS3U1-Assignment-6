<script setup></script>

<template>
    <div class="footer">
        <p>Jayvan Lin | Assignment 5 Movie Website</p>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    /* Enables flexbox */
    justify-content: center;
    /* Centers content horizontally */
    align-items: center;
    /* Centers content vertically (if the footer has a height) */
    background-color: #3d7b22b0;
    /* Optional: Dark green background */
    padding: 20px;
    /* Optional: Adds padding around the footer */
    left: 0;
    bottom: 0;
    width: 100%;
}

.footer p {
    font-weight: bold;
    color: white;
    /* Optional: Makes the text white */
    margin: 0;
    /* Removes default margin */
    font-size: 1rem;
    /* Optional: Adjust the font size */
}
</style>