<template>
    <header>
      <svg id="logoEnjoei" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.83 158.83"><g data-name="Layer 1"><path fill="#F05B78" d="M146.11 121.61a1.63 1.63 0 00-.74-1l-27.64-16.71a1.47 1.47 0 00-2 .39 43.72 43.72 0 01-72.88 0 1.47 1.47 0 00-2-.47c-.86.55-27.63 16.54-27.63 16.54a1.61 1.61 0 00-.52 2.26 79.39 79.39 0 00133.1.22 1.59 1.59 0 00.22-1.24"/><path fill="#4F2D32" d="M79.41 37.72a41.75 41.75 0 0137.11 22.68H42.31a41.75 41.75 0 0137.1-22.68m78.93 50.54a81.74 81.74 0 00.49-8.85A79.42 79.42 0 0023.26 23.26a79.45 79.45 0 00-22.77 65 1.59 1.59 0 001.63 1.45h154.64a1.58 1.58 0 001.58-1.43"/></g></svg>
      <div></div>      
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    #logoEnjoei{
        height: 30px;    
        margin: 25px 50%;    
    }

    svg#logoEnjoei+div {    
        width: 100%;
        border-bottom: 1px solid var(--color-gray-2);    
    }
</style>