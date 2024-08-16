<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create an account
      </h2>
    </div>

    <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div v-if="role !== 'viewer'">
            <label for="avatar" class="block text-sm font-medium leading-6 text-gray-900">Avatar</label>
            <div class="mt-2 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Upload Image</label>
                <input 
                  @change="handleFileUpload"
                  id="avatar-upload" 
                  name="avatar-upload" 
                  type="file" 
                  accept="image/*"
                  class="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Or, Enter Image URL</label>
                <input 
                  v-model="avatarUrl" 
                  id="avatar-url" 
                  name="avatar-url" 
                  type="text" 
                  placeholder="https://example.com/image.jpg"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" 
                />
              </div>
              <div v-if="avatarPreview">
                <label class="block text-sm font-medium text-gray-700">Image Preview</label>
                <img :src="avatarPreview" alt="Avatar Preview" class="mt-2 w-32 h-32 rounded-full object-cover" />
              </div>
            </div>
          </div>

          <div>
            <label for="first_name" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
            <div class="mt-2">
              <input v-model="first_name" id="first_name" name="first_name" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="last_name" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
            <div class="mt-2">
              <input v-model="last_name" id="last_name" name="last_name" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
            <div class="mt-2">
              <input v-model="email" id="email" name="email" type="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2">
              <input v-model="password" id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div v-if="role !== 'viewer'">
            <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Age</label>
            <div class="mt-2">
              <input v-model="age" id="age" name="age" type="number" min="0" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div v-if="role !== 'viewer'">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <input v-model="country" id="country" name="country" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div v-if="role !== 'viewer'">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
            <div class="mt-2">
              <input v-model="phone" id="phone" name="phone" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
            <select v-model="role" id="role" name="role" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6">
              <option value="user">User</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const avatar = ref('');
    const avatarUrl = ref('');
    const avatarPreview = ref('');
    const first_name = ref('');
    const last_name = ref('');
    const email = ref('');
    const password = ref('');
    const age = ref('');
    const country = ref('');
    const phone = ref('');
    const role = ref('user'); // Default role
    const router = useRouter();

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      avatar.value = URL.createObjectURL(file);
      avatarPreview.value = avatar.value;
    };

    const handleRegister = async () => {
      const userData = {
        email: email.value,
        password: password.value,
        role: role.value,
        avatar: avatar.value || avatarUrl.value,
        first_name: first_name.value,
        last_name: last_name.value,
        age: age.value,
        country: country.value,
        phone: phone.value,
      };

      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (data.success) {
          router.push('/home');
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };

    return {
      avatar,
      avatarUrl,
      avatarPreview,
      first_name,
      last_name,
      email,
      password,
      age,
      country,
      phone,
      role,
      handleFileUpload,
      handleRegister,
    };
  },
};
</script>
