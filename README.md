# Costello marketing site

### Development requirements and setup
* ruby `2.3.1`
* bundler `gem install bundler`

#### Setup
* `git clone git@github.com:andcostello/costello-site.git`
* `cd costello-site && bundle install`

#### Steps for local development
* `rake start`(will serve jekyll site at `localhost:4000` and uses livereload for auto refresh)

### Deployment
Cloudcannon for hosting

```yaml
 Prod:
   branch: master
   url: https://andcostello.com
 Stage:
   branch: stage
   url: https://fresh-gum.cloudvent.net
```

Documentation: https://docs.cloudcannon.com/editing/front-matter/
