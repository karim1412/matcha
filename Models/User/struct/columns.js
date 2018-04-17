'USE STRICT'


module.exports =
{
  all: ['id', 'first_name', 'last_name', 'login', 'password', 'email', 'age', 'nb_image', 'gender', 'orientation', 'bio', 'pic0', 'pic1', 'pic2', 'pic3', 'pic4', 'city', 'lng', 'lat', 'status', 'is_lock', 'reset_pass'],

  single:
  {
    gender:         {value: ['female', 'male', 'other'], default: 'female'},
    orientation:    {value: ['heterosexual','bisexual','homosexual'], default: 'bisexual'},
    nb_image:       {default: 0},
    profile_image:  {default: null},
    bio:            {default: ''},
    status:         {value: ['online','offline'], default: 'offline'},
    is_lock:        {default: 'false'},
    reset_pass:     {default: null}
  }
}
